document.querySelector('#submit-button').addEventListener('click', () => {
  const apiKey = "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";

  const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  const question = document.querySelector('#prompt').value;

  fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${"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"}`
    },
    body: JSON.stringify({
      prompt:question,
      max_tokens: 4000,
      temperature: 0,
      stream: false
    })
  })
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('#response-container');
    console.log(data.choices[0].text);
    container.innerHTML = `<p>${data.choices[0].text}</p>`;
  })
});