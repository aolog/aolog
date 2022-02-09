// 代码高亮
$('figure.highlight').each(function () {
  let langName = $(this).attr('class').split(' ')[1]
  if (langName === 'plain' || langName === undefined) langName = 'Code'
  $(this).prepend(`<div class="highlight-tools"><div class="code-lang">${langName}</div></div>`)
});