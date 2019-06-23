$(document).ready(function () {
  // create a handlebars template
//  var source   = document.getElementById('item-template').innerHTML;
//  var template = Handlebars.compile(document.getElementById('item-template').innerHTML);

  // DOM element where the Timeline will be attached
  var container = document.getElementById('visualization');

  // Create a DataSet (allows two way data-binding)
  var items = new vis.DataSet([
    // round of 16
    {
      player1: 'Alteração Telefone',
      abbr1: 'br',
      score1: '1 (3)',
      player2: 'Chile',
      abbr2: 'cl',
      score2: '1 (2)',
      className: "card iron-man",
      group: "A",
      contentBefore: 'Atual: (xx) xxxx - xxxx',
      contentAfter: 'Anterior: (xx) xxxx-xxx',
      start: '2014-06-28T13:00:00'
    },
    {
      player1: 'Alteração Telefone',
      abbr1: 'br',
      score1: '1 (3)',
      player2: 'Chile',
      abbr2: 'cl',
      score2: '1 (2)',
      className: "card iron-man",
      group: "B",
      contentBefore: 'Atual: (xx) xxxx - xxxx',
      contentAfter: 'Anterior: (xx) xxxx-xxx',
      start: '2014-06-29T13:00:00'
    },
  ]);

  var groups = new vis.DataSet([
    {
      "content": "A", "id": "A", "value": "1", "className": "groupA"
    },
    {
      "content": "B", "id": "B", "value": "1", "className": "groupA"
    }
  ]);

  // Configuration for the Timeline
  var options = {
    // specify a template for the items
  //  template: template

  template: function (item) {
  return '<h1>' + item.player1 + '</h1><p class="card-content">' + item.contentBefore + '</p><p class="card-content">' + item.contentAfter + '</p>';
}
  };

  // Create a Timeline
  //var timeline = new vis.Timeline(container, items, options);

  var timeline = new vis.Timeline(container);
  timeline.setOptions(options);
  timeline.setGroups(groups);
//  timeline.setItems(itemsArray);
  timeline.setItems(items);
});
