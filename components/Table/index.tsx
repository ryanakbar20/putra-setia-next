import {useEffect, useState} from 'react';

export default function Table({ data, theme }) {
  const [ClassName, setClassName] = useState( ['card', 'shadow']);
  const [TableClass, setTableClass] = useState( ['table']);
  const [ButtonClass, setButtonClass] = useState( ['btn', 'btn-sm']);

  useEffect(() => {
    if (theme === 'dark') {
      setClassName([...ClassName, 'bg-dark', 'text-white']);
      setTableClass([...TableClass, 'dark']);
      setButtonClass([...ButtonClass, 'btn-secondary']);
    } else {
      setButtonClass([...ButtonClass, 'btn-primary']);
    }
  }, [theme]);

  return (
    <section className={theme === 'dark' ? 'dark' : 'light'}>
      <div className="container table-ranting">
        <div className="row">
          <div className="col pt-5">
            <h4>Cabang Dan Ranting Terdaftar</h4>
          </div>
        </div>
        <div className="row pt-4 pb-5">
          <div className="col">
            <div className={ClassName.join(' ')}>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className={TableClass.join(' ')}
                    id="dataTable"
                    width="100%"
                    cellSpacing="0"
                  >
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Ranting</th>
                        <th scope="col">Cabang</th>
                        <th scope="col">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.data.map((item, index) => {
                        return (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{item.twig}</td>
                              <td>{item.branch}</td>
                              <td>
                                <div className={ButtonClass.join(' ')}>
                                  Detail
                                </div>
                              </td>
                            </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
