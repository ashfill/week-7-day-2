var array = 'Schlitz four dollar toast godard truffaut bespoke neutra artisan pop-up chia keytar single-origin coffee sustainable disrupt';
var res = array.split(" ");

for(var i = res.lenght -1; i > 0; i--)
{
	if(res[i].lenght === 6)
	document.write(res[i]);
}