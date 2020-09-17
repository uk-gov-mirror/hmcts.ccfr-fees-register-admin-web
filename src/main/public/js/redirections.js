'use strict'

const currentLocation = window.location;
const host = new URL(currentLocation).host;
const pathName = new URL(currentLocation).pathname;

if(host === 'fees-register.perftest.platform.hmcts.net' && pathName === '/fees') {
    window.location.href = 'https://fees-register-dom1.perftest.platform.hmcts.net';
}
