<script>
  import { Alert, Card, Badge, Accordion, AccordionItem, Carousel, Link, Tabs, Tab, Keys } from "../components.js";
</script>

<svelte:head>
  <title>Demo page</title>
</svelte:head>

<article>
  <h1>
    Your
    <b>documentation</b>
    template can look like this. Check it out.
  </h1>

  <h2>Typography</h2>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima
    a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit
    magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate
    fugiat! <Badge text="New" color="primary" />
  </p>

  <Card>
    <span slot="badge">
      <Badge text="New" color="primary" />
    </span>

    <h5 class="type-title">Open Sans</h5>
    <div class="type-example">
      <span>Ab</span>
    </div>
  </Card>

	<h2>Tabs</h2>

	<p>When you press <Keys combination="Windows+Control+left" />, <Link href="https://example.com">Windows+Control+Left</Link> lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam maiores aspernatur quos sit totam quod incidunt, accusamus, nihil exercitationem, vitae similique dolore. Iste natus hic asperiores culpa neque ex commodi? </p>

	<Tabs style=pills>
		<Tab title="Tab one">
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, quo quidem deserunt earum molestias libero saepe, aliquid natus ullam possimus omnis animi nisi aperiam error? Fugiat reprehenderit dolore cum voluptatum!</p>
		</Tab>
		<Tab title="Tab two">
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatum quisquam aliquid aliquam qui necessitatibus enim? Eius rerum delectus nisi, iste vero provident, inventore, repudiandae earum fugiat omnis molestiae aperiam.</p>
		</Tab> 
		<Tab title="Tab three">
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis omnis tenetur fugiat fugit debitis corrupti eum possimus maiores, blanditiis, quos at cupiditate voluptatibus perferendis quia doloribus fuga hic ullam.</p>
		</Tab>
	</Tabs>

	<h2>Carousel</h2>

	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, explicabo. Quos nemo praesentium voluptate veritatis? Ipsam ex adipisci rem est voluptatum explicabo! Natus, totam ratione nam aliquam sapiente eum? Expedita?</p>

	<Carousel>
		<figure>
			<img src="https://webuildthemes.com/guidebook/assets/images/image-1.jpg" />
			<figcaption>Caption for the image. This can be very long and cumbersome so it spans multiple lines.</figcaption>
		</figure>

		<figure>
			<img src="https://webuildthemes.com/guidebook/assets/images/image-1.jpg" />
			<figcaption>Caption for the image. This can be very long and cumbersome so it spans multiple lines.</figcaption>
		</figure>
	</Carousel>

  <h2>Tables</h2>

  <p>
  Tables are fun. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste officia eligendi aliquid inventore accusamus odio dolorem magni distinctio explicabo, cumque dignissimos placeat cupiditate fugiat necessitatibus nobis nam modi quae cum.
  </p>

  <table class="table table-striped boxed">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>

  <h2>Accordions</h2>

  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nisi optio atque, laboriosam commodi assumenda dolorem, aspernatur natus, corrupti aut error exercitationem? Quae eum repellat illo quia quod, veritatis veniam!</p>

  <Accordion>
	<AccordionItem title="Panel one">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis blanditiis nobis ipsam adipisci dignissimos totam voluptatibus ipsa voluptatem quas a molestias, ea asperiores deserunt possimus ullam quaerat impedit corporis?</p>
	</AccordionItem>
	<AccordionItem title="Panel two">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis blanditiis nobis ipsam adipisci dignissimos totam voluptatibus ipsa voluptatem quas a molestias, ea asperiores deserunt possimus ullam quaerat impedit corporis?</p>
	</AccordionItem>
	<AccordionItem title="Panel three">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis blanditiis nobis ipsam adipisci dignissimos totam voluptatibus ipsa voluptatem quas a molestias, ea asperiores deserunt possimus ullam quaerat impedit corporis?</p>
	</AccordionItem>

	<AccordionItem>
		<span slot="title">Asdf <b>kult</b></span>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis blanditiis nobis ipsam adipisci dignissimos totam voluptatibus ipsa voluptatem quas a molestias, ea asperiores deserunt possimus ullam quaerat impedit corporis?</p>
	</AccordionItem>
  </Accordion>

  <h2>Code</h2>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus officia ducimus consectetur beatae itaque sapiente reiciendis nulla. Dolore nihil quas omnis repudiandae obcaecati? Reiciendis laudantium voluptatum tempore in exercitationem.</p>

  <pre>C:\><b>maxto</b>
MaxTo CLI version 2.0.0.366
Matches for your help query

launch             Launch a program
window center      Center window
window focus       Focus on window
window maximize    Maximize window to screen
window move        Move window
regions apply      Load preset
regions highlight  Highlight regions
license apply      Apply license
license remove     Remove license
license status     Check if MaxTo is licensed
service restart    Restart MaxTo services
service start      Start MaxTo services
service stop       Stop MaxTo services</pre>

	<h2>Images</h2>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fuga repellat nostrum esse ipsa, magnam ex. Voluptates minima, laborum culpa, nihil incidunt beatae amet voluptate dolores inventore, aliquam totam distinctio.</p>

	<figure>
		<img src="https://webuildthemes.com/guidebook/assets/images/image-1.jpg" />
		<figcaption>Caption for the image. This can be very long and cumbersome so it spans multiple lines.</figcaption>
	</figure>

	<h2>Alerts</h2>

	<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium natus explicabo quo non, eveniet libero voluptate? Aperiam, assumenda maxime ut, officiis totam recusandae saepe autem magnam inventore quo, repellendus veniam.</p>

	<Alert>
		<h2>Default style</h2>

		<p>Just a box with an icon. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vel rerum repellat, non neque repudiandae natus tempore, minima veniam odio in quisquam sed, accusamus ut placeat deleniti repellendus officia quos?</p>
	</Alert>

	<Alert kind=info>
		<h2>Information</h2>

		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vel rerum repellat, non neque repudiandae natus tempore, minima veniam odio in quisquam sed, accusamus ut placeat deleniti repellendus officia quos?</p>
	</Alert>

	<Alert kind=success>
		<h2>Success</h2>

		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vel rerum repellat, non neque repudiandae natus tempore, minima veniam odio in quisquam sed, accusamus ut placeat deleniti repellendus officia quos?</p>

		<hr/>

		<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio unde sequi rerum. Dicta excepturi nostrum ex repudiandae magni aliquid! Corporis accusantium officia, impedit sint cum totam doloribus. A, excepturi vero!</p>
	</Alert>

	<Alert kind=warning>
		<h2>Warning</h2>

		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vel rerum repellat, non neque repudiandae natus tempore, minima veniam odio in quisquam sed, accusamus ut placeat deleniti repellendus officia quos?</p>
	</Alert>

	<Alert kind=danger>
		<h2>Danger</h2>

		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vel rerum repellat, non neque repudiandae natus tempore, minima veniam odio in quisquam sed, accusamus ut placeat deleniti repellendus officia quos?</p>
	</Alert>

	<h2>Steps</h2>

	<ol>
		<li>
			<p>Lorem <Link href="https://example.com">ipsum dolor sit amet</Link>, consectetur adipisicing elit. Omnis ad hic ut aperiam harum esse quidem laudantium, quasi repudiandae maxime voluptates, similique, ducimus nulla aliquid magni recusandae, laboriosam! Iusto, eius.</p>
		</li>
		<li>
			<p>Second Item</p>
			<ol>
			<li><p>First <Link href="mailto:support@maxto.net">Subitem</Link></p></li>
			<li><p>Second Subitem</p></li>
			</ol>
		</li>
		<li><p>Third Item</p></li>
		</ol>
</article>

