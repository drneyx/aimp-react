import './BreadCrumb.css';


export default function BreadcrumbCom({
    paths = [{ name: "Home", path: "/" }],
  }) {
    return (
      <>
        {paths && paths.length > 0 && (
          <div className="container d-flex justify-content-start breadcrumb">
            <div className="breadcrumb-wrapper font-weight-normal small text-dark mb-3 mt-3">
              {paths.map((path) => (
                <span key={path.name}>
                  <a href={path.path} className="text-decoration-none mx-1 text-dark">
                    {path.name}
                  </a>
                  <span className="separator">/</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
  