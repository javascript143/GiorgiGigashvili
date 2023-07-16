function removeTokens() {
    sessionStorage.removeItem('sessionToken');
    document.cookie = 'cookieToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }