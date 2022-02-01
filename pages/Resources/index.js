import React from 'react';
import BooksComponent from '../../Component/BooksComponent';
import PodcastsComponent from '../../Component/PodcastsComponent';
import Dashnav from '../../Component/Dashnav';
import Sidebar from '../../Component/SideNavbar';
import BooksData from '../../Component/Data/BooksData'
import PodcastsData from '../../Component/Data/PodcastsData';
import DocumnetsData from '../../Component/Data/DocumentsData';
import DownloadsComponent from '../../Component/DownloadsComponent';
import secondNavbar from '../../Component/secondNavbar';


class index extends React.Component {
    constructor() {
        super();
        this.state = {
            PodcastsData: PodcastsData,
            BooksData: BooksData,
            DocumnetsData: DocumnetsData,
            booksvisible: 6,
            podcastsvisible: 6,
            documenrtsvisible: 6,
        };
        this.LoadMore = this.LoadMore.bind(this);
        this.ShowLess = this.ShowLess.bind(this);
    }
    LoadMore(name) {
        this.setState((old) => {
            return { [name]: old[name] + 6 };
        });
    }
    ShowLess(name) {
        this.setState(() => {
            return { [name]: 6 };
        });
    }
    render() {
        const RenderingBooks = this.state.BooksData.slice(
            0,
            this.state.booksvisible
        ).map((books) => {
            return (
                <BooksComponent
                    Imgsrc={books.imgSrc}
                    title={books.title}
                    authur={books.authur}
                    cost={books.cost}
                />
            )
        });
        const RenderingPodcasts = this.state.PodcastsData.slice(
            0,
            this.state.podcastsvisible
        ).map((podcasts) => {
            return (
                <PodcastsComponent
                    Imgsrc={podcasts.imgSrc}
                    title={podcasts.title}
                    showBy={podcasts.showBy}
                />
            )
        });
        const RenderingDownloads = this.state.DocumnetsData.slice(
            0,
            this.state.documenrtsvisible
        ).map((pdf) => {
            return (
                <DownloadsComponent
                    Imgsrc={pdf.imgSrc}
                    fileName={pdf.fileName}
                />
            )
        })
        return <>
            <div className="d-inline-flex w-100">
                <Sidebar />
                <div style={{ width: "inherit" }}>
                    <Dashnav />
                    <div className='container mx-auto mt-3 Table' >
                        <p className='fs-40 Gothic_3D'>Resources</p>
                        <div className='bg-dash brdr p-4'>
                            <p className='fs-20'>Books</p>
                            <div className='row my-4 g-4'>
                                {RenderingBooks}
                            </div>
                            {this.state.booksvisible < this.state.BooksData.length ? (
                                <div
                                    className="col-12 text-center mb-5"
                                    onClick={() => this.LoadMore('booksvisible')}
                                >
                                    <button className="btn" style={{ cursor: "pointer" }}>
                                        load More
                                    </button>
                                </div>
                            ) : (
                                <div
                                    className="col-12 text-center mb-5"
                                    onClick={() => this.ShowLess('booksvisible')}
                                >
                                    <button className="btn" style={{ cursor: "pointer" }}>
                                        Show Less
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className='bg-dash brdr p-4'>
                            <p className='fs-20'>Podcasts</p>
                            <div className='row my-4 g-4'>
                                {RenderingPodcasts}
                            </div>
                            {this.state.podcastsvisible < this.state.PodcastsData.length ? (
                                <div
                                    className="col-12 text-center mb-5"
                                    onClick={() => this.LoadMore('podcastsvisible')}
                                >
                                    <button className="btn" style={{ cursor: "pointer" }}>
                                        load More
                                    </button>
                                </div>
                            ) : (
                                <div
                                    className="col-12 text-center mb-5"
                                    onClick={() => this.ShowLess('podcastsvisible')}
                                >
                                    <button className="btn" style={{ cursor: "pointer" }}>
                                        Show Less
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className='bg-dash brdr p-4'>
                            <p className='fs-20'>Downloads</p>
                            <div className='row my-4 g-4'>
                                {RenderingDownloads}
                            </div>
                            {this.state.documenrtsvisible < this.state.DocumnetsData.length ? (
                                <div
                                    className="col-12 text-center mb-5"
                                    onClick={() => this.LoadMore('documenrtsvisible')}
                                >
                                    <button className="btn" style={{ cursor: "pointer" }}>
                                        load More
                                    </button>
                                </div>
                            ) : (
                                <div
                                    className="col-12 text-center mb-5"
                                    onClick={() => this.ShowLess('documenrtsvisible')}
                                >
                                    <button className="btn" style={{ cursor: "pointer" }}>
                                        Show Less
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>;
    }
}

export default index;
