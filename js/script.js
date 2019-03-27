// console.log('loaded!')
(function () {
  feature_descriptions = {
    "feature0": {
      text: '<p>Для любого вашего домена, зарегистрированного на&nbsp;«Джино», вы можете в несколько кликов создать простую\
      страницу-визитку. Это удобно, если ваш основной сайт еще не готов, или если домен вам нужен только для почты.</p>\
      <p>Вы можете разместить здесь краткую информацию о&nbsp;себе или вашем бизнесе, ссылки на аккаунты\
      в&nbsp;соцсетях и&nbsp;любые другие сайты. Создание и поддержка базового варианта сайта-визитки абсолютно бесплатны.</p>\
      <p><a href="https://domains.jino.ru/features/businesscard/">Подробнее</a></p>',
      name: 'Сайт-визитка',
      path: 'images/features/businesscard.svg',
      class:'feature-top column1',
    },
    "feature1": {
      text: "<p>Зарегистрировав домен через «Джино», вы бесплатно получаете постоянную возможность изменения NS-записей и направления\
      домена туда, куда вам хочется.</p>\
      <p>У вас несколько доменов? Мы предоставляем бесплатную поддержку DNS для всех доменов, зарегистрированных и поддерживаемых\
      «Джино».</p>",
      name: 'Поддержка DNS',
      path: 'images/features/dns.svg',
      class:'feature-top column2',
    },
    "feature2": {
      text: '<p>Подтвердите владение доменным именем с помощью официального сертификата «Джино». Вам достаточно распечатать документ в\
      формате PDF, который будет доступен в панели управления сразу же после делегирования домена.</p>',
      name: 'Сертификат о владении доменом',
      path: 'images/features/certificate.svg',
      class:'feature-top column3',
    },
    "feature3": {
      text: '<p>С помощью функции «Автопродление»  больше не нужно беспокоиться о том, что ваш домен внезапно перестанет работать.\
      «Джино» заблаговременно продлит регистрацию на следующий период и вышлет вам уведомление об этом.</p>',
      name: 'Автопродление',
      path: 'images/features/autorenewal.svg',
      class:'feature-top column4',
    },
    "feature4": {
      text: '<p>Специально для своих клиентов «Джино» предлагает абсолютно бесплатный сервис — «Джино.Облако». Это надежное место для\
      хранения файлов — здесь точно поместится всё. Вы получите постоянный доступ к своей музыке, фотографиям и документам и\
      сможете без труда делиться данными с кем угодно.</p>\
      <p><a href="https://cloud.jino.ru/">Подробнее</a></p>',
      name: 'Облачное хранилище на 20 Гб',
      path: 'images/features/cloud.svg',
      class:'feature-bottom column1',
    },
    "feature5": {
      text: '<p>Будучи клиентом «Джино», вы&nbsp;можете бесплатно получить SSL-сертификат от&nbsp;удостоверяющего центра <a href="https://letsencrypt.org" target="_blank" rel="nofollow noreferrer noopener">Let’s Encrypt</a>. Данный сертификат позволит вашим сайтам работать по&nbsp;безопасному протоколу HTTPS и&nbsp;избежать предупреждений браузера о&nbsp;том, что на&nbsp;сайте используется незашифрованное соединение.</p>\
      <p>Вы&nbsp;можете легко обзавестись сертификатом: в&nbsp;разделе «Домены» вашего аккаунта выберите нужный домен и&nbsp;на&nbsp;странице его настроек перейдите во&nbsp;вкладку «SSL». Сертификат выдаётся по&nbsp;нажатию одной кнопки и&nbsp;продлевается автоматически.</p>',
      name: 'Бесплатный SSL-сертификат',
      path: 'images/features/freessl.svg',
      class:'feature-bottom column2',
    },
    "feature6": {
      text: '<p>С&nbsp;помощью технологии цифрового подписывания ответа DNS-сервера вы&nbsp;можете застраховаться от&nbsp;возможной его подмены и&nbsp;быть уверенными в&nbsp;том, что посетители вашего сайта не&nbsp;попали на&nbsp;замаскированный сайт злоумышленников.</p>\
      <p>Для подключения DNSSEC необходимо перейти в&nbsp;соответствующую вкладку в&nbsp;настройках вашего домена и&nbsp;нажать кнопку «Включить».</p>',
      name: 'DNSSEC в один клик',
      path: 'images/features/dnssec.svg',
      class:'feature-bottom column3',
    },
    "feature7": {
      text: '<p>Зарегистрировав домен на «Джино», вы сможете в любой момент просто и бесплатно перенаправить его на любую страницу\
      любого сайта.</p>\
      <p>У вас есть своя группа в социальной сети? Дайте ей персональный домен и она сможет стать полноценным сайтом, а не только\
      страницей соцсети! Персонифицирование при помощи перенаправления доменного имени от «Джино» — это дополнительный\
      инструмент в продвижении и идентификации вашей деятельности.</p>\
      <p><a href="https://domains.jino.ru/features/redirect/" class="button">Подробнее</a></p>',
      name: 'Перенаправление',
      path: 'images/features/redirect.svg',
      class:'feature-bottom column4',
    },
  }

  let feature_DOM = document.getElementsByClassName("feature")
  let description_element = document.getElementById("feature-description")
  // let description_text = document.getElementById("feature-description-text")
  for (let i = 0; i < feature_DOM.length; i++) {
    let feature = feature_DOM[i];
    let feature_description = feature_descriptions[feature.dataset.index]
    feature.getElementsByTagName('p')[0].textContent = feature_description.name
    feature.getElementsByTagName('img')[0].src = feature_description.path
    feature.addEventListener("click", activate_feature(feature), false)
  }
  
  function activate_feature(feature) {
    return function () {
      features = document.getElementsByClassName("feature")
      for (let elem of features) {
        elem.classList.remove('active')
      } 
      feature.classList.add('active')     
      description_element.innerHTML = feature_descriptions[feature.dataset.index].text
      description_element.classList = feature_descriptions[feature.dataset.index].class+" round-border"
    }
  }

  let testForm = document.getElementById("test-form")
  let testResult = document.getElementById("test-result")
  testForm.addEventListener('submit',function(evt){
    evt.preventDefault()
    testResult.classList.remove("hidden")
    testResult.children[0].innerHTML = testForm.domain_name.value+' &#8211 свободен. <a href="#">Зарегистрировать за 39&#8381</a>'
  })


  window.addEventListener('scroll', function(){
    let page1size = document.getElementById("page1").offsetHeight;
    let page2size = document.getElementById("page2").offsetHeight;
    let pageLimits = [page1size, page1size+page2size]
    let currentOffset = window.pageYOffset
    if(currentOffset < pageLimits[0]){
      activateNavigationPoint(0)
    } else if (currentOffset < pageLimits[1]){
      activateNavigationPoint(1)
    } else {
      activateNavigationPoint(2)
    }
  })
  let navigator = document.getElementById("navigator")
  function activateNavigationPoint(point){
    for(let i = 0; i < navigator.children.length; i++){
      if (i==point){
        navigator.children[i].classList.add("current")
      } else {
        navigator.children[i].classList.remove("current")
      }
    }
  }
  
  activate_feature(feature_DOM[0])()
})()

// document.getElementById("feature-description").addEventListener('click', (event) => console.log(event.target))
// console.log(feature_DOM.length)