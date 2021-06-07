// Callback
// Bỏ 1 function A vào function B
// function B chạy xong thì nhớ chạy function A

async function downloadAvatar(url, onSuccess) {
    // tai avatar
    console.log('start downloading avatar') 
    
    // tai xong thi update avatar 
    console.log('finish downloading avatar')
    onSuccess()
}

downloadAvatar('url', function(){
    console.log('updated avatar')
})

