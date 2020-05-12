const APIkey = 'Ih1V6TNl5DTR9QitZx'
const formEle = document.querySelector('form')
const inputEle = document.querySelector('input')
const sectionEle = document.querySelector('section')
const tbodyEle = document.querySelector('.tbody')
const streetNameEle = document.getElementById('street-name');

// step1 search input street and insert html 
function searchstreet(street) {
  fetch(`https://api.winnipegtransit.com/v3/streets.json?api-key=${APIkey}&name=${street}&usage=long`)
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Houston,  we have a problem.");
      }
    })
    .then(json => {

      if (json.streets.length === 0) {
        inputEle.value = "";
        alert('No results were found, please try again.')
      } else {

        insertstreetHtml(json.streets);
      }
    })
}

function insertstreetHtml(_streets) {
  //todo All previous results be removed
  let html = '';
  sectionEle.innerHTML = '';
  tbodyEle.innerHTML = '';
  _streets.forEach(element => {
    html += `<a href="#" data-street-key=${element.key}>${element.name}</a>`
  });
  sectionEle.insertAdjacentHTML('afterbegin', html);
}


//step2 search stops according to click streetkey
function searchstops(_streetkey) {
  fetch(`https://api.winnipegtransit.com/v3/stops.json?api-key=${APIkey}&street=${_streetkey}`)
    .then(resp => resp.json())
    .then(json => {
      // if we can't find any stop alert message,or go next step
      if (json.stops.length === 0 || json.stops == undefined) {
        alert('sorry, there is no stop');
      } else {
        searchschedule(json.stops);
      }
    })
}


// step3 using searched stops to find route schedule
function searchschedule(_stops) {
  Promise.all(
    _stops.forEach(element => {
      if (element !== undefined) {

        fetch(`https://api.winnipegtransit.com/v3/stops/${element.key}/schedule.json?max-results-per-route=2&api-key=${APIkey}`)
          .then(resp => resp.json())
          .then(json => {
            if (json['stop-schedule'] !== undefined) {
              insertResultHtml(json['stop-schedule']);
            }
          })
      }
    }));


}


// step4 insert result html
function insertResultHtml(schedule) {
  let html = "";

  //todo get every route from route-schedules,if no route-schedules skip
  if (schedule['route-schedules'].length >= 1) {
    schedule['route-schedules'].forEach(element => {
      console.log(element);
      element['scheduled-stops'].forEach(alltime => {
        if (alltime.times.arrival != undefined) {
          let obj = { objstop: schedule.stop.name, objcross: schedule.stop['cross-street'].name, objdirect: schedule.stop.direction, objBus: element.route.number, objnextbus: alltime.times.arrival.scheduled }

          let time = timeformat(obj.objnextbus);
          html += `
        <tr>
          <td>${obj.objstop}</td>
          <td>${obj.objcross}</td>
          <td>${obj.objdirect}</td>
          <td>${obj.objBus}</td>
          <td>${time}</td>
        </tr>
        `
        }
      });
      //todo create an obj to store all data we will use


      //todo time format


    })
  } else {
    console.log('there is no route schedule');
  };

  tbodyEle.insertAdjacentHTML('beforeend', html);
}

//todo format 2020-05-11T18:24:25 => 6:24 PM
function timeformat(str) {
  const date = new Date(str);
  let arr = [];
  arr[0] = date.getHours();
  arr[1] = date.getMinutes();

  //fix the bug if minute=1,will show 1:1,
  if (arr[1] < 10) {
    arr[1] = `:0${date.getMinutes()}`;
  } else {
    arr[1] = `:${date.getMinutes()}`;
  }

  if (arr[0] > 12) {
    arr[0] = arr[0] - 12;
    arr[2] = ' PM';
  } else {
    arr[2] = ' AM';
  }

  return arr.join("");
}


//todo submit input content
formEle.addEventListener('submit', function (e) {


  if (inputEle.value !== "") {
    let input = inputEle.value;
    searchstreet(input);
  }
  e.preventDefault();
});

//todo click street addEventListenner
sectionEle.addEventListener('click', function (e) {
  if (e.target.tagName.toLowerCase() === "a" && e.target !== undefined) {
    let streetkey = e.target.dataset.streetKey;
    searchstops(streetkey);

    //careful, we have to clear previous schedule results after one click 
    tbodyEle.innerHTML = '';
    streetNameEle.innerHTML = `Displaying results for ${e.target.innerHTML}`;
  }
  e.preventDefault();
});