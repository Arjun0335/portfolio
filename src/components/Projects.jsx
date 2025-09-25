import React from 'react'


const projects = [
{ id:1, name:'SMS Fraud Detector', desc:'BERT-based classifier for financial SMS fraud detection', link:'#' },
{ id:2, name:'Topic Modelling App', desc:'Transformer-powered topic modeling for reviews', link:'#' }
]


export default function Projects(){
return (
<section id="projects" className="projects container">
<h3>Selected projects</h3>
<div className="grid">
{projects.map(p => (
<article key={p.id} className="card">
<h4>{p.name}</h4>
<p>{p.desc}</p>
<a href={p.link} target="_blank" rel="noreferrer">View</a>
</article>
))}
</div>
</section>
)
}
