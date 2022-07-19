/*jshint esversion: 6 */
// HASHTAG
let textArea = document.getElementById('hashtag-textarea');

if(window.innerWidth <= 810) {
  textArea.setAttribute('style', 'width: 100%');
}else {
  textArea.setAttribute('style', 'width: 520px');
}

// UPLOADED IMAGE - Change image
let defaultImage = document.getElementById('uploadedImage');
let uploadedImage = document.getElementById('uploadedFile');

window.onload = () => {
  defaultImage.src = uploadedImage.getAttribute('value');
};

uploadedImage.addEventListener('change', updateImage);

function updateImage(event) {
  const reader = new FileReader();
    reader.onload = function() {
      defaultImage.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    textArea.value = event.target.files[0].name;
    // reader.onload = function() {
    //   URL.revokeObjectURL(defaultImage.src) // free memory
    // }
}

// CLEAR HASHTAG Text AREA
const clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', clearText);

function clearText() {
  const hashtagText = document.getElementById('hashtag-textarea');

  if(hashtagText.value != "") {
    hashtagText.value = "";

    let errContainerPosition = document.documentElement.scrollTop;
    errContainer.setAttribute('style', `display: flex; top: ${errContainerPosition}px`);
    errContainer.textContent = 'Words successfully cleared!';
    setTimeout(function() {
      errContainer.setAttribute('style', 'opacity: 0; display: none');
  }, 3000);

  }
}

// CREATE HASHTAGS
const suggestedTagsBtn = document.querySelector('.suggested-hashtags');
const errContainer = document.getElementById('errorContainer');
const hashtagOutputContainerWrapper = document.querySelector('.hashtags-display-container');
const hashtagOutputContainer = document.querySelector('.hashtags-output');
const hashtagsOutputControls = document.querySelector('.hashtags-btn-2');

suggestedTagsBtn.addEventListener('click', suggestedTags);

function suggestedTags() {
  const hashtagText = document.getElementById('hashtag-textarea');
  const spinner = document.querySelector('.fa-spinner');

  if(hashtagText.value == "") {
    let errContainerPosition = document.documentElement.scrollTop;
    errContainer.setAttribute('style', `display: flex; top: ${errContainerPosition}px`);
    errContainer.textContent = 'Please, enter your sentence, words, or upload an image to generate hashtags';
    setTimeout(function() {
      errContainer.setAttribute('style', 'opacity: 0; display: none');
  }, 3000);
  }else {
    // Get words or sentence by accessing the value of the textarea ekement
    const inputedWords = hashtagText.value;
    const pastedWordsOrSentence = inputedWords.replace(/[\"\-,.\?\/\{}\'';\:_\n\=\/]/g, '');

    const inputedWordsToHashtags = pastedWordsOrSentence.toLowerCase();

    const pastedWordsToArray = inputedWordsToHashtags.split(" ");
    const finalWord = [...new Set(pastedWordsToArray)].toString("");

    console.log(finalWord);

    // const tags = document.createElement('li');
    // const delTag = document.createElement('a');
    const fontAwesomeTag = document.createElement('i');
    fontAwesomeTag.classList.add('fa-solid', 'fa-xmark');

    finalWord.split(',').forEach((item, i) => {
      const tags = document.createElement('li');
      const delTag = document.createElement('a');
      const fontAwesomeTag = document.createElement('i');
      fontAwesomeTag.classList.add('fa-solid', 'fa-xmark');

      tags.textContent = '#' + item;
      if(tags.innerHTML !== item && hashtagOutputContainer.children && hashtagOutputContainer.children.length < 40 && item.length >= 3) {
      hashtagOutputContainer.appendChild(tags).appendChild(delTag).appendChild(fontAwesomeTag);

    } else {
      //
    }

      delTag.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.remove();
        if(hashtagOutputContainer.innerHTML == '') {
          hashtagOutputContainer.setAttribute('style', 'display: none');
          hashtagsOutputControls.setAttribute('style', 'display: none');
        }
      });
    });

    hashtagOutputContainerWrapper.setAttribute('style', 'display: flex');
    hashtagsOutputControls.setAttribute('style', 'display: flex');
    errContainer.setAttribute('style', 'display: none');
  }
}

// ADD HASHTAG FROM INPUT BOX
const hashtagInputBox = document.getElementById('hastgasInput');

hashtagInputBox.addEventListener('keypress', addHashTags);

function addHashTags(event) {

  if(event.key === 'Enter') {
    if(hashtagInputBox.value == "" || hashtagInputBox.value.length < 3) {
      errContainer.textContent = 'Enter a word or sentence more than 3 characters to generate hashtags';
    }else {
      const inputedWords = hashtagInputBox.value;

      const tags = document.createElement('li');
      const delTag = document.createElement('a');
      const fontAwesomeTag = document.createElement('i');
      fontAwesomeTag.classList.add('fa-solid', 'fa-xmark');

      const typedInputedWords = inputedWords.replace(/[\"\-,.\?\/\{}\'';\:_\n\=\/]/g, '');

      // delTag.textContent = ;
      tags.textContent = '#' + typedInputedWords;
      hashtagOutputContainer.appendChild(tags).appendChild(delTag).appendChild(fontAwesomeTag);

      delTag.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.remove();
        if(hashtagOutputContainer.innerHTML == '') {
          hashtagOutputContainer.setAttribute('style', 'display: none');
          hashtagsOutputControls.setAttribute('style', 'display: none');
        }
      });
    }
    hashtagInputBox.value = "";
  }
}
// /ADD HASHTAG FROM INPUT BOX

// Copy Generated addHashTags
const copyHashTags = document.querySelector('.copy-all');

copyHashTags.addEventListener('click', () => {
  navigator.clipboard.writeText(hashtagOutputContainer.innerText);

  let errContainerPosition = document.documentElement.scrollTop;
  errContainer.setAttribute('style', `display: flex; top: ${errContainerPosition}px`);
  errContainer.textContent = 'Hashtags copied to clipboard';
  setTimeout(function() {
    errContainer.setAttribute('style', 'opacity: 0; display: none');
}, 3000);

});

// GENERIC ERROR
let genericErr = document.querySelector('.generic-err');
window.onscroll = function() {
  let topValue = document.documentElement.scrollTop;

  genericErr.setAttribute('style', `top: ${topValue}px`);
};
