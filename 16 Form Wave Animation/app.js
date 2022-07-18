const labels = document.querySelectorAll('.form-control label')

/**
 将<label>Email</lable>变成
 <label>
    <span style="transition-delay:0ms">E</span>
    <span style="transition-delay:50ms">a</span>
    <span style="transition-delay:150ms">m</span>
    <span style="transition-delay:200ms">i</span>
    <span style="transition-delay:250ms">l</span>
 </label>
 */

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter,idx) => `<span style='transition-delay:${idx * 50}ms'>${letter}</span>`)
        .join('')
})

