document.addEventListener('DOMContentLoaded', () => {
    const resultsTableBody = document.querySelector('#resultsTable tbody');
    const searchButton = document.getElementById('searchButton');
    const downloadCsvButton = document.getElementById('downloadCsv');
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');
    const currentPageSpan = document.getElementById('currentPage');

    let chartInstance;
    let currentPage = 1;
    const rowsPerPage = 10;
    let currentData = [];

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    const renderTable = (data) => {
        resultsTableBody.innerHTML = '';

        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const pageData = data.slice(start, end);

        if (pageData.length === 0) {
            resultsTableBody.innerHTML = '<tr><td colspan="5">No results found</td></tr>';
            return;
        }

        pageData.forEach((item) => {
            const row = `
                <tr>
                    <td title="${item.GrantTitle}">${truncateText(item.GrantTitle, 50)}</td>
                    <td>${item.Deadline}</td>
                    <td>${item.Funding || 'N/A'}</td>
                    <td title="${item.Description}">${truncateText(item.Description, 100)}</td>
                    <td><a href="${item.Link}" target="_blank">Link</a></td>
                </tr>`;
            resultsTableBody.innerHTML += row;
        });

        currentPageSpan.textContent = `Page ${currentPage} of ${Math.ceil(data.length / rowsPerPage)}`;
    };

    const updatePagination = () => {
        const totalPages = Math.ceil(currentData.length / rowsPerPage);
        prevPageButton.disabled = currentPage === 1;
        nextPageButton.disabled = currentPage === totalPages;
    };

    const changePage = (direction) => {
        const totalPages = Math.ceil(currentData.length / rowsPerPage);
        if (direction === 'next' && currentPage < totalPages) {
            currentPage++;
        } else if (direction === 'prev' && currentPage > 1) {
            currentPage--;
        }
        renderTable(currentData);
        updatePagination();
    };

    const renderChart = (data) => {
        const ctx = document.getElementById('resultsChart').getContext('2d');

        if (chartInstance) {
            chartInstance.destroy();
        }

        const labels = data.map((item) =>
            item.GrantTitle.length > 30 ? item.GrantTitle.substring(0, 30) + '...' : item.GrantTitle
        );
        const values = data.map((item) => parseFloat(item.Funding) || Math.random() * 100);
        const links = data.map((item) => item.Link);

        chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Funding Amounts',
                        data: values,
                        backgroundColor: labels.map(
                            () =>
                                `rgba(${Math.floor(Math.random() * 255)}, 
                                ${Math.floor(Math.random() * 255)}, 
                                ${Math.floor(Math.random() * 255)}, 0.7)`
                        ),
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    tooltip: {
                        callbacks: {
                            title: (tooltipItems) => {
                                return data[tooltipItems[0].dataIndex].GrantTitle;
                            },
                            label: (context) => `Funding: $${context.raw.toFixed(2)}`,
                        },
                    },
                    zoom: {
                        zoom: {
                            wheel: { enabled: true },
                            pinch: { enabled: true },
                            mode: 'x',
                        },
                        pan: {
                            enabled: true,
                            mode: 'x',
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            autoSkip: false,
                            maxRotation: 45,
                            minRotation: 0,
                        },
                    },
                    y: { beginAtZero: true },
                },
                onClick: (event, elements) => {
                    if (elements.length > 0) {
                        const firstElement = elements[0];
                        const dataIndex = firstElement.index;
                        const link = links[dataIndex];

                        if (link) {
                            window.open(link, '_blank');
                        } else {
                            alert('No associated link for this data point.');
                        }
                    }
                },
            },
        });
    };

    const fetchData = () => {
        fetch('http://localhost:3000/api/results')
            .then((response) => response.json())
            .then((data) => {
                currentData = data;
                renderTable(data);
                updatePagination();
                renderChart(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                resultsTableBody.innerHTML = '<tr><td colspan="5">Error loading results</td></tr>';
            });
    };

    const downloadCsv = () => {
        const csvContent = currentData.map((item) =>
            [
                item.GrantTitle,
                item.Deadline,
                item.Funding,
                item.Description,
                item.Link,
            ].join(',')
        );
        csvContent.unshift('Grant Title,Deadline,Funding,Description,Link');
        const blob = new Blob([csvContent.join('\n')], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'results.csv';
        link.click();
    };

    searchButton.addEventListener('click', fetchData);
    downloadCsvButton.addEventListener('click', downloadCsv);
    prevPageButton.addEventListener('click', () => changePage('prev'));
    nextPageButton.addEventListener('click', () => changePage('next'));

    fetchData();
});
const colors = [
    'rgba(255, 99, 132, 0.5)',  // Light red
    'rgba(54, 162, 235, 0.5)',  // Light blue
    'rgba(255, 206, 86, 0.5)',  // Light yellow
    'rgba(75, 192, 192, 0.5)',  // Light teal
    'rgba(153, 102, 255, 0.5)', // Light purple
    'rgba(255, 159, 64, 0.5)'   // Light orange
  ];
  
  const chartInstance = new Chart(document.getElementById('resultsChart'), {
    type: 'bar',
    data: {
      labels: chartLabels,
      datasets: [{
        label: 'Funding Amounts',
        data: chartValues,
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('0.5', '1')),
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true },
        tooltip: { enabled: true }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
  