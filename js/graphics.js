var mainCanvas;
var ctx;

function initGraphics()
{
	mainCanvas = document.getElementById("gameCanvas");
	mainCanvas.focus();
	ctx = mainCanvas.getContext("2d");
}

function color(r, g, b)
{
  if(typeof r == 'number')
  {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  else
  {
    this.code = r;
  }

	this.toStyle = function()
	{
    if(typeof this.code == 'undefined')
		  return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
    return this.code;
	}

	this.setFill = function()
	{
    if(typeof this.code == 'undefined')
		  ctx.fillStyle = this.toStyle();
    ctx.fillStyle = this.code;
	}

	this.setStroke = function()
	{
    if(typeof this.code == 'undefined')
		  ctx.strokeStyle = this.toStyle();
    ctx.strokeStyle = this.code;
	}
}

function prepareText()
{
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
}

function setFont(s, name)
{
	ctx.font = "" + Math.floor(s) + "px " + name;
}

function rect(c, x, y, w, h)
{
	c.setFill();
	ctx.fillRect(x, y, w, h);
}

function lineWidth(w)
{
	ctx.lineWidth = w;
}

function line(x1, y1, x2, y2)
{
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
}

/**
 * Draws a rounded rectangle using the current state of the canvas.
 * If you omit the last three params, it will draw a rectangle
 * outline with a 5 pixel border radius
 * @param {CanvasRenderingContext2D} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate
 * @param {Number} width The width of the rectangle
 * @param {Number} height The height of the rectangle
 * @param {Number} [radius = 5] The corner radius; It can also be an object 
 *                 to specify different radii for corners
 * @param {Number} [radius.tl = 0] Top left
 * @param {Number} [radius.tr = 0] Top right
 * @param {Number} [radius.br = 0] Bottom right
 * @param {Number} [radius.bl = 0] Bottom left
 * @param {Boolean} [fill = false] Whether to fill the rectangle.
 * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
 */
function roundRect(x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }

}