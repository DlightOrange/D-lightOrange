<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Select all the bar-expand elements
        const bars = document.querySelectorAll('.bar-expand');

        // Create an Intersection Observer instance
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add the visible class when the element is in view
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.5  // Trigger when 50% of the element is visible
        });

        // Observe each bar-expand element
        bars.forEach(bar => {
            observer.observe(bar);
        });
    });
</script>
