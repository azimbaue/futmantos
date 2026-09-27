$imageFolder = "D:\sites\futmantos\Imagens"
$files = Get-ChildItem -Path $imageFolder -File

$hashTable = @{}
$duplicates = @()

foreach ($file in $files) {
    # We can use size and name matching for "- Copia", but a hash is safer
    $hash = Get-FileHash $file.FullName -Algorithm MD5
    $hashValue = $hash.Hash

    if ($hashTable.ContainsKey($hashValue)) {
        Write-Host "Duplicate found: $($file.Name) == $($hashTable[$hashValue])"
        $duplicates += $file
    } else {
        $hashTable[$hashValue] = $file.Name
    }
}

Write-Host "Found $($duplicates.Count) exact duplicates."
foreach ($dup in $duplicates) {
    Remove-Item $dup.FullName -Force
    Write-Host "Removed $($dup.Name)"
}
Write-Host "Done deduplicating."
