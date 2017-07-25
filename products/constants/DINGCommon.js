
"use strict"

const BASEURL="http://localhost:3000"

const ADURLLINK = `${BASEURL}/msg/getmsg`;
const DingURLLINK= `${BASEURL}/DingCont/getDingCont`;
const WorkURLLINK= `${BASEURL}/WorkLists/getWorkLists`;
const BlockURLLINK= `${BASEURL}/Blocks/getBlocks`;
module.exports = {
    ADURLLINK,
    DingURLLINK,
    WorkURLLINK,
    BlockURLLINK
}
