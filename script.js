
// List of articles
var articles = [
				'The Devil Wears Prada',
				
				'Norma Jean',
				'The Bled',
			
				'The Midway State',
				
				'Counterparts',
				'Oh, Sleeper',
				'Anywhere But Here',
				'An Old Dog'];

// Function to sort articles while ignoring certain words
function sortArticles(articles) {
    // Define ignored words
    var ignoredWords = ["a", "an", "the"];

    // Custom sorting function
    function customSort(a, b) {
        // Function to remove ignored words and convert to lowercase
        function removeIgnoredWords(str) {
            return str.toLowerCase().split(' ').filter(word => !ignoredWords.includes(word)).join(' ');
        }

        // Compare articles without ignored words
        var articleA = removeIgnoredWords(a);
        var articleB = removeIgnoredWords(b);
        return articleA.localeCompare(articleB);
    }

    // Sort articles using custom sorting function
    articles.sort(customSort);
}

// Call the sorting function
sortArticles(articles);

// Get the ul element
var bandList = document.getElementById("bands");

// Add sorted articles to the ul
articles.forEach(function(article) {
    var li = document.createElement("li");
    li.textContent = article;
    bandList.appendChild(li);
});
</script>

</body>
</html>
