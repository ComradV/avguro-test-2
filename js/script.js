

(function () {
  statusClasses = [{
    class: 'status-checking',
    img: 'images/wait.svg',
    showFileName: true,
  }, {
    class: 'status-checked',
    img: 'images/ok.svg',
    showFileName: true,
  }, {
    class: 'status-declined',
    img: 'images/upload.svg',
    showFileName: false,
  },
  ]

  actionTexts = [
    {
      'status-checking': 'Файл загружен',
      'status-checked': 'Страница с фотографией',
      'status-declined': 'Загрузить скан страницы с фотографией',
    }, {
      'status-checking': 'Файл загружен',
      'status-checked': 'Страница с пропиской',
      'status-declined': 'Загрузить скан страницы с пропиской',
    }
  ]

  fileform = document.getElementById('file-input')
  inputFileds = fileform.getElementsByTagName('input')

  for (let i = 0; i < inputFileds.length; i++) {
    inputFiled = inputFileds[i]
    inputFiled.addEventListener('change', function (event) {

      fileContainerElement = event.target.parentElement.parentElement.parentElement.parentElement
      statusClasses.forEach(el => { fileContainerElement.classList.remove(el.class) })
      newStatus = getRandomArrayElement(statusClasses)
      fileContainerElement.classList.add(newStatus.class)
      
      imageElement = fileContainerElement.getElementsByTagName('img')[0]
      imageElement.src = newStatus.img
      
      actionTextElement = fileContainerElement.getElementsByClassName('action')[0].children[0]
      actionTextElement.textContent = actionTexts[i][newStatus.class]
      
      detailsElement = fileContainerElement.getElementsByClassName('details')[0]
      if (newStatus.showFileName) {
        detailsElement.textContent = event.target.files[0].name + " (" + getReadableFileSizeString(event.target.files[0].size) + ")"
      } else {
        detailsElement.textContent = "Размер файла не более 5Мб"
      }

    })
  }

  function getReadableFileSizeString(fileSizeInBytes) {
    var i = -1;
    var byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
    do {
      fileSizeInBytes = fileSizeInBytes / 1024;
      i++;
    } while (fileSizeInBytes > 1024);

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
  };

  function getRandomArrayElement(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

})()