import React, { Component } from "react";
import Newsitems from "./Newsitems";
export default class News extends Component {
  // articles = [
  //   {
  //     source: { id: null, name: "Daily Mail" },
  //     author: "Tracy Wright, Ariel Zilber, Keith Griffith",
  //     title:
  //       "Saturday Night Live CANCELS live audience and limits cast and crew on set due to COVID-19 outbreak - Daily Mail",
  //     description:
  //       "Insiders told the publication that executive producer Lorne Michaels had tested positive, adding that the 'show must go on but don't expect to see Colin Jost, Sarah Sherman or (Aristotle) Athari.'",
  //     url: "https://www.dailymail.co.uk/tvshowbiz/article-10324749/Saturday-Night-Live-CANCELS-live-audience-limits-cast-crew-set-COVID-19-outbreak.html",
  //     urlToImage:
  //       "https://i.dailymail.co.uk/1s/2021/12/19/06/51977267-0-image-a-18_1639894531698.jpg",
  //     publishedAt: "2021-12-19T11:25:39Z",
  //     content:
  //       "The Omicron variant knocked out Saturday Night Live as an on-set COVID outbreak forced the hit NBC show to close its doors to a live audience and to cancel its musical guest.\r\nTom Hanks, Tina Fey, an… [+19128 chars]",
  //   },
  //   {
  //     source: { id: null, name: "CBS Sports" },
  //     author: "Brian Campbell",
  //     title:
  //       "Jake Paul vs. Tyron Woodley 2 fight results, highlights: 'The Problem Child' knocks Woodley out cold - CBSSports.com",
  //     description:
  //       "The social media star followed through on his promise to finish his business in the rematch on Saturday night",
  //     url: "https://www.cbssports.com/boxing/news/jake-paul-vs-tyron-woodley-2-fight-results-highlights-the-problem-child-knocks-woodley-out-cold/live/",
  //     urlToImage:
  //       "https://sportshub.cbsistatic.com/i/r/2021/12/19/722288e9-a60a-4e25-9396-dd21f2316ffc/thumbnail/1200x675/09ee7e9878a6b8d41050b8aecc8ea742/jake-paul-woodley-ko-punch.jpg",
  //     publishedAt: "2021-12-19T11:00:00Z",
  //     content:
  //       "Jake Paul's fifth foray into professional boxing created nothing but clinches and boos from the crowd in Saturday's rematch with former UFC welterweight champion Tyron Woodley. And then the YouTube s… [+3855 chars]",
  //   },
  //   {
  //     source: { id: "fox-news", name: "Fox News" },
  //     author: "Fox News Staff",
  //     title:
  //       "Kamala Harris clash with Charlamagne Tha God reveals much about VP, Biden admin: Fox panelists - Fox News",
  //     description:
  //       "Vice President Kamala Harris clash this week with TV host Charlamagne Tha God drew a range of reactions Saturday from panelists on Fox News’ “The Big Saturday Show.”",
  //     url: "https://www.foxnews.com/media/kamala-harris-charlamagne-tha-god-vp-biden-admin-fox-big-saturday-show-bruce-concha-hurt-acuna",
  //     urlToImage:
  //       "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/aa5c47cd-0022-4872-9727-cf238704cab8/5e961566-f15f-4862-b822-afd0b547c164/1280x720/match/image.jpg",
  //     publishedAt: "2021-12-19T10:57:33Z",
  //     content:
  //       'Vice President Kamala Harris clash this week with TV host Charlamagne Tha God drew a range of reactions Saturday from panelists on Fox News "The Big Saturday Show."\r\nHost Alicia Acuna questioned Fox … [+4110 chars]',
  //   },
  // ];

  constructor() {
    super();
    console.log("This is constructor");
    this.state = {
      // articles: this.articles,
      articles: [],
    };
  }
  async componentDidMount() {
    let apiurl = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=be308d15421f46afbe4ec30ce9d67f54&page=1`;
    let data = await fetch(apiurl);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-center my-3">INSA NEWS</h1>

          {this.state.articles.map((element) => {
            return (
              <div className="col-4" key={element.url}>
                <Newsitems
                  title={element.title}
                  description={element.description}
                  urlToImage={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
