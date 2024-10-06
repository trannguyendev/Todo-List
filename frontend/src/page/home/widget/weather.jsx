import React, { useEffect } from 'react';

const TomorrowWidget = () => {
  useEffect(() => {
    // Function to load the Tomorrow.io SDK script
    const loadScript = () => {
      if (document.getElementById('tomorrow-sdk')) {
        if (window.__TOMORROW__) {
          window.__TOMORROW__.renderWidget();
        }
        return;
      }

      const fjs = document.getElementsByTagName('script')[0];
      const js = document.createElement('script');
      js.id = 'tomorrow-sdk';
      js.src = 'https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js';
      js.onload = () => {
        if (window.__TOMORROW__) {
          window.__TOMORROW__.renderWidget();
        }
      };

      fjs.parentNode.insertBefore(js, fjs);
    };

    loadScript();

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      const script = document.getElementById('tomorrow-sdk');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div
      className="tomorrow"
      data-location-id="130200"
      data-language="EN"
      data-unit-system="METRIC"
      data-skin="light"
      data-widget-type="summary"
      style={{ paddingBottom: '22px', position: 'relative' }}
    >
      <a
        href="https://www.tomorrow.io/weather-api/"
        rel="nofollow noopener noreferrer"
        target="_blank"
        style={{ position: 'absolute', bottom: '0', transform: 'translateX(-50%)', left: '50%' }}
      >
        <img
          alt="Powered by the Tomorrow.io Weather API"
          src="https://weather-website-client.tomorrow.io/img/powered-by.svg"
          width="250"
          height="18"
        />
      </a>
    </div>
  );
};

export default TomorrowWidget;
