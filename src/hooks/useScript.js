import { useEffect } from "react";

const useScript = url => {
    useEffect(() => {
        var MainImg = document.getElementById('MainImg');
            var smallimg = document.getElementsByClassName('small-img');

            smallimg[0].onclick = function(){
                MainImg.src = smallimg[0].src;
            }
            smallimg[1].onclick = function(){
                MainImg.src = smallimg[1].src;
            }
            smallimg[2].onclick = function(){
                MainImg.src = smallimg[2].src;
            }
            smallimg[3].onclick = function(){
                MainImg.src = smallimg[3].src;
            }
    },[url])
}

export default useScript;