const dayjs = require('dayjs');
dayjs().format();

var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
dayjs.extend(utc)
dayjs.extend(timezone)

function CheckUnmountComponent(unmountDate) {
    /* UNMOUNT COMPONENT IF TRUE */
    const expiry = dayjs(unmountDate, "MMMM DD YYYY hh:mm A").tz("Asia/Manila");
    if (dayjs().tz("Asia/Manila") > expiry) {
        return true;
    }
}

function FilterContents(contents) {
    
    function CheckExpiry(content) {
        const expiry = dayjs(content.expiry, "MMMM DD YYYY hh:mm A").tz("Asia/Manila");
        if (dayjs().tz("Asia/Manila") < expiry) {
            return content;
        }
    }

    const filtered = contents.filter(CheckExpiry);

    return filtered;
}

export { FilterContents, CheckUnmountComponent }
