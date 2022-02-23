// Prepare
document.getElementById('sequence').value = 'ATATATATATAGAGATATAGATAGATAGTAGATAGATAAACACACCACACACA';

// Utility

function generateDonwloadHandler(id) {

  const sequence = document.getElementById('sequence').value;
  const fileElement = document.getElementById('file');
  
  fileElement.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(sequence));

  fileElement.setAttribute('class','ready');
  fileElement.setAttribute('download','test.txt');
}