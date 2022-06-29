export default function SearchNotFound({classGif}) {
    return (
        <div className='empty-search-wrap'>
          <img className={classGif} src="/asset/img/search-not-found.gif" alt='Search Not Found' />
        </div>
    )
};