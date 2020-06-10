import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as asyncHandler from 'express-async-handler';

import { verifyCaptcha } from './captcha';
import { sendToDiscord } from './discord';


if (process.env.CAPTCHA_SECRET_KEY == null) {
    console.log('[FATAL] Missing required environment variable CAPTCHA_SECRET_KEY!')
    process.exit(1);
}

const port : number = (parseInt(process.env.PORT) || 9000);
const app : express.Application = express();

var jParser = bodyParser.json();
app.use(express.static(path.join(__dirname, 'front', 'build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'front', 'build', 'index.html'));
});

app.post('/api/v1/enlist', jParser, asyncHandler(async (req, res) => {
    let captchaStatus = await verifyCaptcha(req.body['captcha']);
    if (captchaStatus) {
        res.json(JSON.stringify({
            success: false
        }));
    } else {
        let form = req.body['form-data'];
        await sendToDiscord(form['discordHandle'], form['timezone'], form['hasMic'], form['isOfAge'], form['characterName'], form['preferredPath'], form['experiencedA3ACE']);
        res.json(JSON.stringify({
            success: true
        }));
    }
    console.log(req.body);
}));

app.listen(port, function() {
    console.log(`[*] Listening on port ${port}!`)
});
