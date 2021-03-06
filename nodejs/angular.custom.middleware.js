// MIT - Joel Pagan
// NodeJS Express middleware to serve Angular static bundle js files

// shared utility service
var mimeService = require('utility.mime.service')();

// new instance of express
var app = express();

// this is a simple and straightfoward way
// to have express serve the angular bundle js files
app.use((request, response, next) => {
	if (request.path.indexOf(".bundle.js") > -1){
		var { pathname }  = url.parse(request.url);
		pathname = pathname.toLowerCase().replace("app/", "");
		
		var filepath = path.join(path.join(process.cwd(), 'public/angular'), pathname);
		var extname = String(path.extname(filepath)).toLowerCase();
		var contentType  = mimeService.getMimeType(extname);

		fs.stat(filepath, (err, stat) => {
			if (err){
				next();
			} else {
				fs.readFile(filepath, (err, data) => {
					response.writeHead(200, {"Content-Type": contentType})
					response.write(data);
					response.end();
				});
			}
		});
	} else {
		next();
	}
});