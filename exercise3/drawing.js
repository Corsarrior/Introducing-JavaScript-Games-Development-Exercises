
function draw_grid(ctx, minor, major, stroke, fill) {
    minor = minor || 10;
    major = major || minor * 5;
    stroke = stroke || "#00FF00";
    fill = fill || "#009900";

    ctx.save();
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    let width = ctx.canvas.width, height = ctx.canvas.height

    for (var x = 0; x < width; x += minor) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.lineWidth = (x % major == 0) ? 0.5 : 0.25;
        ctx.stroke();
        if (x % major == 0) { ctx.fillText(x, x, 10); }
    }

    for (var y = 0; y < height; y += minor) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.lineWidth = (y % major == 0) ? 0.5 : 0.25;
        ctx.stroke();
        if (y % major == 0) { ctx.fillText(y, 0, y + 10); }
    }

    ctx.restore();
}

function draw_pacman(ctx, x, y, r, openness, fillColor = "#FFE033") {
    ctx.strokeStyle = "#0A0A0A";
    ctx.fillStyle = fillColor;
    context.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, r, (0.25 * openness) * Math.PI, 1.75 * Math.PI);
    ctx.lineTo(x, y);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
}
