import Link from "next/link"

export default function Navbar(){
    return(
        <div>
            <ul>
                <b>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about" className="Link">About</Link></li>
                <li><Link href="/contact" className="Link">Contact</Link></li>
                </b>
                <li className="nonListStyle">
                <ul>
                        <li><h3>Bssic JS</h3></li>
                </ul>
                    <ul>
                        <li><b>Looping</b></li>
                        <li><Link href="/blog" className="Link">Looping</Link></li>
                        <li><Link href="/blog" className="Link">Looping</Link></li>
                        <br/>
                    </ul>
                </li>
                <li className="nonListStyle">
                <ul>
                        <li><h3>Next JS</h3></li>
                </ul>
                    <ul>
                        <li><b>Nested Routes</b></li>
                        <li><Link href="/blog" className="Link">Blog Page</Link></li>
                        <li><Link href="/blog/first" className="Link">Blog first Page</Link></li>
                        <li><Link href="/blog/secound" className="Link">Blog secound Page</Link></li>
                        <br/>
                    </ul>
                </li>
                <li className="nonListStyle">
                    <ul>
                        <li><b>Dynamic Routing</b></li>
                        <li><Link href="/Profil" className="Link">Dynamic Page get query Profil</Link></li>
                        <li><Link href="/case" className="Link">Dynamic Page "Case"</Link></li>
                        <br/>
                    </ul>
                </li>
                <li className="nonListStyle">
                    <ul>
                        <li><b>Catch Routes</b></li>
                        <li><Link href="/catchroute" className="Link">Catch Page</Link></li>
                        <li><Link href="/valuefillter" className="Link">Catch Value Fillter Page</Link></li>
                        <li><Link href="/navprogrammatically" className="Link">Navigating Programmatically</Link></li>
                        <br/>
                    </ul>
                </li>
                <li className="nonListStyle">
                    <ul>
                        <li><b>Pre-Rendering</b></li>
                        <li><Link href="/sgwgsp" className="Link">Static Generation with getStaticProps</Link></li>
                        <li><Link href="/pagesvscomponents" className="Link">Pages vs Components</Link></li>
                        <li><Link href="/post" className="Link">SSG with Dynamic Parameters & getStaticPaths using fallback:false</Link></li>
                        <li><Link href="/postfallbackfalse" className="Link">SSG with Dynamic Parameters & getStaticPaths using fallback:true</Link></li>
                        <li><Link href="/postfallbackblock" className="Link">SSG with Dynamic Parameters & getStaticPaths using fallback:blocking</Link></li>
                        <li><Link href="/products" className="Link">Incremental Static Regeneration whit product page example</Link></li>
                        <br/>
                    </ul>
                </li>
                <li className="nonListStyle">
                    <ul>
                        <li><b>Server Side Rendering</b></li>
                        <li><Link href="/news" className="Link">SSR with getServerSideProps</Link></li>
                        <br/>
                    </ul>
                    
                </li>
                <li className="nonListStyle">
                    <ul>
                        <li><b>Client-side Data Fetching</b></li>
                        <li><Link href="/clientsidedatafetching/dashboard" className="Link">Client-side Data Fetching Dashboard</Link></li>
                        <li><Link href="/clientsidedatafetching/dashboardswr" className="Link">Client-side Data Fetching Dashboard-SWR</Link></li>
                        <br/>
                    </ul>
                    
                </li>
                <li className="nonListStyle">
                    <ul>
                        <li><b>Pre rendering + Client side Data Fetching</b></li>
                        <li><Link href="/events" className="Link">Pre rendering + Client side Data Fetching (Events study case)</Link></li>
                        <br/>
                    </ul>
                </li>
                <li className="nonListStyle">
                    <ul>
                        <li><b>API</b></li>
                        <li><Link href="/api" className="Link">API Routes #1</Link></li>
                        <li><Link href="/api/dashboard" className="Link">API Routes #2</Link></li>
                        <li><Link href="/api/blog" className="Link">API Routes #3</Link></li>
                        <li><Link href="/api/blog/recent" className="Link">API Routes #4</Link></li>
                        <li><Link href="/api/comments/1" className="Link">Dynamic API Routes</Link></li>
                        <li><Link href="/api/one/two/three" className="Link">Catch All API Routes</Link></li>
                        <li><Link href="/comments" className="Link">API GET, POST & DELETE Request</Link></li>
                        <br/>
                        <li><b> Styling Section</b></li>
                        <li><Link href="/scsspage/about" className="Link">About Page using scss</Link></li>
                        <li><Link href="/scsspage/contact" className="Link">Contact Page using scss</Link></li>
                        <li><Link href="/css-in-js" className="Link">Page using CSS in JS</Link></li>
                        <br/>
                        <li><b>Miscellaneous Section</b></li>
                        <li><Link href="/app-layout/about" className="Link">App Layout - About Page</Link></li>
                        <li><Link href="/app-layout/perpagelayout-about" className="Link">App Layout(per-page layout) - About Page</Link></li>
                        <li><Link href="/app-layout/head-component-about" className="Link">App Layout(Head Component) - About Page</Link></li>
                        <li><Link href="/app-layout/blog/124" className="Link">App Layout(Bind dynamic value) - Blog Page</Link></li>
                        <li><Link href="/pic" className="Link">Image Component Page</Link></li>
                        <li><Link href="/pic" className="Link">Image Component Page (BlurDataURL)</Link></li>
                        <li><Link href="/news-preview-mode" className="Link">News Preview Mode</Link></li>
                        <li><Link href="/css-in-js/wrongsource" className="Link">Redirects ( Will back to Home Page )</Link></li>
                        <li><Link href="/environment-variables/blog/124" className="Link">Environment Variables ( Blog Page )</Link></li>
                        <br/>
                        <li><b>Authentication in Next Client Side</b></li>
                        <li><Link href="/next-auth" className="Link">Home Page</Link></li>
                        <li><Link href="/next-auth/blog" className="Link">Dashboard Page</Link></li>
                        <li><Link href="/next-auth/dashboard" className="Link">Blog Page</Link></li>
                        <li><Link href="/api/test-session" className="Link">Securing API Routes</Link></li>
                        <br/>
                    </ul>
                </li>
            </ul>
       </div> 
    )
}