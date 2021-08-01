/**
 * YouTube userscript.
 * 
 * All it does right now is remove a garbage <div>
 * node from the transcript view.
 */

const targetNode = document.querySelector("ytd-watch-flexy");


// Callback function to execute when mutations are observed
const watchTranscript = function(mutationsList, observer) {
		for(const mutation of mutationsList) {
			if (mutation.type === 'childList') {
				const transcript = targetNode.querySelector("ytd-transcript-renderer");
				if (transcript) {
					const garbage = transcript.querySelector("#content");
					if (garbage) {
						garbage.parentNode.removeChild(garbage);
						return;
					}
				}
			}
	}
};

const observer = new MutationObserver(watchTranscript);
const config = { childList: true, subtree: true };

observer.observe(targetNode, config);
