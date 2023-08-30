const DeleteModal = (props) => {
    // eslint-disable-next-line react/prop-types
    const { children } = props;
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>Card title</h5>

                <div className='modal-body'>{children}</div>
                <div className='modal-footer'>
                    <button
                        type='button'
                        className='btn btn-secondary'
                        data-bs-dismiss='modal'>
                        cancel
                    </button>
                    <button type='button' className='btn btn-primary'>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
