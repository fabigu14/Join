async function initHelp() {
    setQueryStringParameter('currentUser', currentUser['username']);
    await init();
}