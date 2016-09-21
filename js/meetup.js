$(document).ready(function(){
  $.getJSON("http://api.meetup.com/btownrb/events?key=1e58764b576c76679e102bc391949&callback=?",
  function (results) {
    var $ = jQuery;
    var nextMeetup = results.data[0];
    var date = new Date(nextMeetup.time);
    $('#next_meetup_name').html(nextMeetup.name);
    $('#next_meetup_date').html(date.formatDate('l, F j'));
    // $('#next_meetup_time').html(date.formatDate('g:i a'));
    $('#next_meetup_yes_rsvp_count').html(nextMeetup.yes_rsvp_count);
    $('#next_meetup_venue_name').html(nextMeetup.venue.name);
    $('.next_meetup_venue_map').attr('href', 'https://www.google.com/maps/place/' + nextMeetup.venue.lat + ',' + nextMeetup.venue.lon + '/@' + nextMeetup.venue.lat + ',' + nextMeetup.venue.lon + ',17z');
    $('.next_meetup_event_url').attr('href', nextMeetup.link);
    $('.rsvp_url').attr('href', 'http://www.meetup.com/btownrb/events/' + nextMeetup.id + '/');
  });
});
