Add-Type -AssemblyName System.Drawing

$scratch = 'C:\Users\usuario\AppData\Local\Temp\claude\C--Users-usuario-Desktop-Proyectos-GH-Peluqueria\21b6a507-8a5d-4908-a8d1-e695d4ddc2fc\scratchpad'
$logoPath = Join-Path $scratch 'logo_crop_test.jpg'

$W = 1200
$H = 630

$bmp = New-Object System.Drawing.Bitmap($W, $H)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias

# Background diagonal gradient: plum -> plum-deep
$plum = [System.Drawing.Color]::FromArgb(255, 0x5C, 0x1D, 0x3E)
$plumDeep = [System.Drawing.Color]::FromArgb(255, 0x3D, 0x13, 0x29)
$rect = New-Object System.Drawing.Rectangle(0,0,$W,$H)
$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $plum, $plumDeep, 35)
$g.FillRectangle($brush, $rect)

# Soft gold radial glow behind logo area (approximate with translucent ellipse)
$goldGlow = [System.Drawing.Color]::FromArgb(40, 0xC9, 0xA1, 0x5A)
$glowBrush = New-Object System.Drawing.SolidBrush($goldGlow)
$g.FillEllipse($glowBrush, -80, 40, 620, 620)

# Load and draw circular logo
$logoSrc = [System.Drawing.Image]::FromFile($logoPath)
$logoDiameter = 420
$logoX = 90
$logoY = [int](($H - $logoDiameter) / 2)

# Cream ring border
$ringPad = 10
$creamColor = [System.Drawing.Color]::FromArgb(255, 0xF4, 0xEC, 0xE6)
$ringBrush = New-Object System.Drawing.SolidBrush($creamColor)
$g.FillEllipse($ringBrush, $logoX - $ringPad, $logoY - $ringPad, $logoDiameter + 2*$ringPad, $logoDiameter + 2*$ringPad)

$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddEllipse($logoX, $logoY, $logoDiameter, $logoDiameter)
$g.SetClip($path)
$g.DrawImage($logoSrc, $logoX, $logoY, $logoDiameter, $logoDiameter)
$g.ResetClip()

# Text block
$textX = $logoX + $logoDiameter + 80
$goldColor = [System.Drawing.Color]::FromArgb(255, 0xC9, 0xA1, 0x5A)
$creamBrush = New-Object System.Drawing.SolidBrush($creamColor)
$goldBrush = New-Object System.Drawing.SolidBrush($goldColor)
$roseColor = [System.Drawing.Color]::FromArgb(255, 0xE0, 0x57, 0x7F)
$roseBrush = New-Object System.Drawing.SolidBrush($roseColor)

$titleFont = New-Object System.Drawing.Font("Georgia", 64, [System.Drawing.FontStyle]::Regular)
$subFont = New-Object System.Drawing.Font("Georgia", 24, [System.Drawing.FontStyle]::Italic)
$smallFont = New-Object System.Drawing.Font("Segoe UI", 18, [System.Drawing.FontStyle]::Regular)

$dot = [string][char]0x00B7

$g.DrawString("GH Estilista", $titleFont, $creamBrush, $textX, 200)
$g.DrawString("Centro integral de belleza", $subFont, $roseBrush, $textX, 295)
$g.DrawString("y bienestar unisex", $subFont, $roseBrush, $textX, 332)
$g.DrawString("PLACILLA, VALPARAISO   $dot   @GH_ESTILISTA", $smallFont, $goldBrush, $textX, 400)

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]88)

$outPath = Join-Path $scratch 'og-image.jpg'
$bmp.Save($outPath, $jpegCodec, $encParams)

$g.Dispose(); $bmp.Dispose(); $logoSrc.Dispose()
Write-Output "saved $outPath"
