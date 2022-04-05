/* All utility functions for dashboard application */

/**
 * This function get the current year
 * @returns: returns full year from javascript Date() object
 */
 function getFullYear() {
    return (new Date().getFullYear());
  }
  
  /**
   * 
   * @param {boolean} isIndex: true if page is index; false if page is not index
   * @returns: returns a string depending on if the current page is the index or not
   */
  function getFooterCopy(isIndex) {
      if (isIndex === true) {
        return ('Holberton School');
      } else {
        return ('Holberton School main dashboard')
      }
  }
  
  function getLatestNotification() {
    return ('<strong>Urgent requirement</strong> - complete by EOD');
  }
  
  export {getFooterCopy, getFullYear, getLatestNotification};
  