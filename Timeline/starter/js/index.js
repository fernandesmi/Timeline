$(document).ready(function () {
  // DOM element where the Timeline will be attached

  $.ajax({
      url: 'http://localhost:3000/posts',
      success: function (data) {
        // hide the "loading..." message

        console.log(data);

      var container = document.getElementById('visualization');

      if(container) {

        var items = new vis.DataSet([
            {id: 1,
             content: '<div class="card-header__image"><img src="https://vignette.wikia.nocookie.net/marveldatabase/images/2/20/Ironmanposter.jpg" height="auto" width="50px"/></div><h2 class="card-header__title">Iron Man</h2><div class="card-content"><div class="card-content__director">Jon Favreau</div><div>Release Date: May 2, 2008<div></div>',
             start: '2008-05-02',
             title: 'US$ 585.1 million',
             className: 'card iron-man'
           },
           {id: 2,
            content: '<div class="card-header__image"><img src="https://vignette.wikia.nocookie.net/marveldatabase/images/7/78/The_Incredible_Hulk_%28film%29.jpg" height="auto" width="50px"/></div><h2 class="card-header__title">The Incredible Hulk</h2><div class="card-content"><div class="card-content__director">Louis Leterrier</div><div>Release Date: June 13, 2008<div></div>',
            start: '2008-06-13',
            title: 'US$ 263.4 million',
            className: 'card hulk'
            },
            {id: 3,
             content: '<div class="card-header__image"><img src="https://vignette.wikia.nocookie.net/marveldatabase/images/e/ed/Iron_Man_2_poster.jpg" height="auto" width="50px"/></div><h2 class="card-header__title">Iron Man 2</h2><div class="card-content"><div class="card-content__director">Jon Favreau</div><div>Release Date: May 7, 2010<div></div>',
             start: '2010-05-07',
             title: '$623.9 million',
             className: 'card iron-man'
           },
           {id: 4,
            content: '<div class="card-header__image"><img src="https://vignette.wikia.nocookie.net/marveldatabase/images/9/9c/Thor_Theatrical_Poster.jpg" height="auto" width="50px"/></div><h2 class="card-header__title">Thor</h2><div class="card-content"><div class="card-content__director">Kenneth Branagh</div><div>Release Date: May 6, 2011<div></div>',
            start: '2011-05-06',
            title: '$449.3 million',
            className: 'card thor'
          },
          {id: 5,
           content: '<div class="card-header__image"><img src="https://vignette.wikia.nocookie.net/marveldatabase/images/3/37/Captain_America_The_First_Avenger_poster.jpg" height="auto" width="50px"/></div><h2 class="card-header__title">Captain America</h2><div class="card-content"><div class="card-content__director">Joe Johnston</div><div>Release Date: May 7, 2010<div></div>',
           start: '2011-07-22',
           title: '$370.6 million',
           className: 'card captain'
         },
         {id: 6,
          content: "<div class='card-header__image'><img src='https://vignette.wikia.nocookie.net/marveldatabase/images/1/1a/The_Avengers_%28film%29_poster_011.jpg/revision/latest/scale-to-width-down/338?cb=20120229020811' height='auto' width='50px'/></div><h2 class='card-header__title'>The Avengers</h2><div class='card-content'><div class='card-content__director'>Joss Whedon</div><div>Release Date: May 4, 2012<div></div>",
          start: '2012-05-04',
          title: '$1.519 billion',
          className: 'card avengers'
        }
        ]);

        // Configuration for the Timeline
        var options = {
          tooltip: {
            followMouse: true,
            overflowMethod: 'cap'
          },
          configure: true
        };

        var groups = new vis.DataSet([
          {
            "content": "A", "id": "A", "value": "1", "className": "groupA"
          },
          {
            "content": "B", "id": "B", "value": "1", "className": "groupA"
          }
        ]);

        // Create a Timeline
        var timeline = new vis.Timeline(container);
        timeline.setOptions(options);
        timeline.setGroups(groups);
        timeline.setItems(data);

      }
    }, error: function (err) {
      console.log('Error', err);
      if (err.status === 0) {
        alert('Failed to load data/basic.json.\nPlease run this example on a server.');
      }
      else {
        alert('Failed to load data/basic.json.');
      }
    }
  });
});
