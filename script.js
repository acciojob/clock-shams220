//your JS code here. If required.
 const p = document.querySelector('#timer');

      function updateClock() {
        const now = new Date();

        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, add 1
        const day = String(now.getDate()).padStart(2, '0');
        
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? String(hours) : '12'; 
        hours = hours.padStart(2, '0');

        p.textContent = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds} ${ampm}`;
      }

      updateClock();

      setInterval(updateClock, 1000);