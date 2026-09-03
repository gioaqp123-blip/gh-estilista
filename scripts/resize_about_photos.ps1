Add-Type -AssemblyName System.Drawing

$scratch = 'C:\Users\usuario\AppData\Local\Temp\claude\C--Users-usuario-Desktop-Proyectos-GH-Peluqueria\21b6a507-8a5d-4908-a8d1-e695d4ddc2fc\scratchpad'

function Resize-And-Encode {
    param(
        [string]$SourcePath,
        [int]$TargetWidth,
        [string]$OutName,
        [long]$Quality = 82
    )

    $img = [System.Drawing.Image]::FromFile($SourcePath)
    $ratio = $TargetWidth / $img.Width
    $targetHeight = [int]([math]::Round($img.Height * $ratio))

    $bmp = New-Object System.Drawing.Bitmap($TargetWidth, $targetHeight)
    $bmp.SetResolution($img.HorizontalResolution, $img.VerticalResolution)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.DrawImage($img, 0, 0, $TargetWidth, $targetHeight)

    $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $Quality)

    $outJpegPath = Join-Path $scratch ($OutName + '.jpg')
    $bmp.Save($outJpegPath, $jpegCodec, $encParams)

    $g.Dispose()
    $bmp.Dispose()
    $img.Dispose()

    $bytes = [System.IO.File]::ReadAllBytes($outJpegPath)
    $b64 = [Convert]::ToBase64String($bytes)
    $dataUri = "data:image/jpeg;base64,$b64"
    $outB64Path = Join-Path $scratch ($OutName + '.b64')
    [System.IO.File]::WriteAllText($outB64Path, $dataUri)

    $sha = [System.Security.Cryptography.SHA256]::Create()
    $hash = [Convert]::ToBase64String($sha.ComputeHash($bytes))

    Write-Output ("{0}: {1}x{2} -> {3} bytes, jpeg={4}, sha256={5}" -f $OutName, $TargetWidth, $targetHeight, $bytes.Length, $outJpegPath, $hash)
}

Resize-And-Encode -SourcePath 'C:\Users\usuario\Desktop\Proyectos\GH Peluqueria\WhatsApp Image 2026-08-27 at 11.26.06 PM.jpeg' -TargetWidth 900 -OutName 'about_main'
Resize-And-Encode -SourcePath 'C:\Users\usuario\Desktop\Proyectos\GH Peluqueria\WhatsApp Image 2026-08-27 at 11.27.23 PM.jpeg' -TargetWidth 560 -OutName 'about_accent'
