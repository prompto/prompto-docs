import { Link } from "react-router-dom";

function subscribe(event) {
	event.preventDefault();
	const form = event.currentTarget;
	if(form)
		alert("subscribe");
}

function Footer() {
	return (
		<>
			<article id="getting-started" className="p-footer">

				<div className="uk-background-muted uk-padding-large uk-padding-remove-horizontal">
					<div className="uk-container uk-container-small uk-text-center">
						<div className="uk-flex uk-flex-middle uk-flex-around">
							<figure>
								<img src={ `${process.env.PUBLIC_URL}/misc/docker.png` } className="uk-width-small uk-margin-small-right" alt="docker" />
								<Link to="/download">
									<span data-uk-icon="icon: download; ratio: 5;"></span>
								</Link>
							</figure>
							<div>
								<div className="uk-text-left">
									<h2>Download the <span>DOCKER</span> image</h2>
									<h3 className="uk-margin-remove-top">Try it out on your local machine!</h3>
								</div>
							</div>

							<hr className="uk-margin-medium-top uk-margin-medium-bottom" />

						</div>

						<hr className="uk-margin-medium-top uk-margin-medium-bottom" />

						<div className="uk-grid-medium uk-text-center" data-uk-grid>
							<p className="uk-text-small">Prompto is currently running its evaluation program.<br/>On-line development and deployment tools are available on request from <a href="https://www.quartance.com" target="_blank" rel="noreferrer">Quartance.</a></p>
							<p className="uk-text-small">Prompto is looking for contributors!<br/>If you wish to participate, please contact us - <a href="mailto:support@prompto.org?subject=Contribute%20to%20prompto&body=Hi,%20I%20would%20like%20to%20contribute%20to%20prompto">support@prompto.org</a>.</p>
						</div>
					</div>
				</div>
			</article>
			<footer>
				<div className="uk-text-center uk-text-small">
					Prompto Java components are optimized using <a href="https://www.ej-technologies.com/products/jprofiler/overview.html"><img src="https://www.ej-technologies.com/images/product_banners/jprofiler_small.png" alt="JProfiler" /></a>
				</div>
				<div style={{height: "5px"}}/>
			</footer>
		</>
	);
}

export default Footer;