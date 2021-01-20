const Canvas = require("canvas");
const jimp = require("jimp");
const gradians = require("../gradiants.json");
class WelcomerZerotwo {
  async welcome(member, { link, gradiant, blur } = {}) {
    if (blur !== false) {
      blur = true;
    }
    if (link && gradiant) {
      return console.log("You can not use link and gradiant at a same time");
    }

    if (!link) {
      if (gradiant) {
        let color = gradians.find(x => x.name === gradiant.toLowerCase());
        if (!color) {
          return console.log("Invalid Gradiant Color :v");
        }

        link = color.link;
      } else {
        link = "https://cdn.discordapp.com/attachments/770615280534552578/801041424929259530/welcome_1.png";
      }
    }

    const canvas = Canvas.createCanvas(800, 270);
    const ctx = canvas.getContext("2d");
	function roundImg(x,y,w,h,r){
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.lineTo(x + w - r, y);
            ctx.quadraticCurveTo(x + w, y, x + w, y + r);
            ctx.lineTo(x + w, y + h - r);
            ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
            ctx.lineTo(x + r, y + h);
            ctx.quadraticCurveTo(x, y + h, x, y + h - r);
            ctx.lineTo(x, y + r);
            ctx.quadraticCurveTo(x, y, x + r, y);
            ctx.closePath();
        }
        function bR(){
            ctx.save()
            roundImg(20, 20, canvas.width, canvas.height, 50)
            roundImg(-20, -20, canvas.width, canvas.height, 50)
            roundImg(-30, 30, canvas.width, canvas.height, 50)
            ctx.clip()
            ctx.save()
            roundImg(-30, -30, canvas.width, canvas.height, 50)
            ctx.clip()
            ctx.save()
            roundImg(-30, -30, canvas.width, canvas.height, 50)
            ctx.clip()
            ctx.save()
            roundImg(-30, -30, canvas.width, canvas.height, 50)
            roundImg(30, -30, canvas.width, canvas.height, 50)
            ctx.clip()
            ctx.save()
            roundImg(30, -30, canvas.width, canvas.height, 50)
            roundImg(30, 30, canvas.width, canvas.height, 50)
            ctx.clip()
        }
    if (blur) {
      const background = await jimp.read(link);

      background.blur(5);

      let mraw = await background.getBufferAsync("image/png");

      const fixedbkg = await Canvas.loadImage(mraw);

      ctx.drawImage(fixedbkg, 0, 0, canvas.width, canvas.height);
    } else {
      const fixedbkg = await Canvas.loadImage(link);

      ctx.drawImage(fixedbkg, 0, 0, canvas.width, canvas.height);
    }

    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    let blurImage = await Canvas.loadImage(
      "https://cdn.discordapp.com/attachments/796548640755023883/801045183974211614/Empty.png"
    );
	bR();
	// Select the color of the stroke
  //ctx.strokeStyle = '#000504';
  
    ctx.drawImage(blurImage, 0, 0, canvas.width, canvas.height);
    let xname = "Welcome <3";

    ctx.font = `bold 50px Life`;
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "start";
    //ctx.stroke()

    const name =
      xname.length > 12 ? xname.substring(0, 12).trim() + "..." : xname;
    ctx.fillText(`${name}`, 335, 113);
    //ctx.strokeText(`${name}`, 335, 113);
    //ctx.stroke()

    ctx.font = `bold 40px Life`;
    ctx.fillStyle = "#FFFFFF";
    

    ctx.fillText(`${member.user.username}`, 381, 179);

    let image = await jimp.read(
      member.user.displayAvatarURL({ format: "jpg", dynamic: true })
    );
    image.resize(2048, 2048);
    image.circle();
    let raw = await image.getBufferAsync("image/png");

    const avatar = await Canvas.loadImage(raw);
      // draws the avatar on the main canvas
    //ctx.drawImage(avatar, 72, 51, 170, 170);
	ctx.drawImage(avatar, 45, 45, 200, 200);

    return canvas.toBuffer();
  }
}

module.exports = WelcomerZerotwo;