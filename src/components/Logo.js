function Logo({ isScrolled, Link }) {
  return (
    <>
      <a href={'https://hilusjr.github.io/photography'}>
        <div className="logo" data-scrolled={isScrolled}>
          <span>hilusjr</span>
          <span>photography</span>
        </div>
      </a>
    </>
  )
}

export default Logo
