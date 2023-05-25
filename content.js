
window.addEventListener('message', (event) => {
    if (event.data.payload && event.data.payload.group === "WebVitals") {
        console.log({ name: event.data.payload.payload.metricName, value: event.data.payload.payload.value});
    }
})