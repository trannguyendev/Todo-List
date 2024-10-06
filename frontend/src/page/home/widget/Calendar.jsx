import React from 'react';

const GoogleCalendarEmbed = () => {
  return (
    <div>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=1bd8bdda7a7c6eb9621ed9c77531d637df05c4800680c32d4f818f59aeff81d9%40group.calendar.google.com&ctz=UTC"
        style={{ border: '0' }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
    </div>
  );
};

export default GoogleCalendarEmbed;
