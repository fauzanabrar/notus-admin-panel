import { useState } from 'react';
import { Modals } from '../Modals';
import { DEFAULT_ACCOUNT_DATA } from 'utils/constants';
import { Dropdown } from '../Dropdown';

const MOCK_DATA_OPTIONS = [
  { id: 1, label: 'Dekan', value: '1' },
  { id: 2, label: 'Wakil Dekan 1', value: '2' },
  { id: 3, label: 'Wakil Dekan 2', value: '3' },
  { id: 4, label: 'Wakil Dekan 3', value: '4' },
];

const AccountFormModal = ({ isOpen, onClose, data = {} }) => {
  const [formValues, setFormValues] = useState({ ...data, ...DEFAULT_ACCOUNT_DATA });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('here', { name, value });
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormValues((prevValues) => ({
  //     ...prevValues,
  //     eventFile: file,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setFormValues({
        username: '',
        nip: '',
        nama: '',
        jabatan: '',
      });

      setIsLoading(false);

      onClose();
    }, 2000);
  };

  return (
    <Modals isOpen={isOpen} size="medium" onClose={onClose} title="Account Schedule Form">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nip" className="block font-medium">
            NIP
          </label>
          <input
            placeholder="Isi disini..."
            type="text"
            id="nip"
            name="nip"
            value={formValues.nip}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="nama" className="block font-medium">
            Nama
          </label>
          <input
            placeholder="Isi disini..."
            type="text"
            id="nama"
            name="nama"
            value={formValues.nama}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="username" className="block font-medium">
            Username
          </label>
          <input
            placeholder="Isi disini..."
            type="text"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="jabatan" className="block font-medium">
            Jabatan
          </label>
          <Dropdown
            value={formValues.jabatan}
            name="jabatan"
            options={MOCK_DATA_OPTIONS}
            onChange={handleChange}
          />
        </div>
        {/* <div>
          <label htmlFor="eventLink" className="block font-medium">
            Link
          </label>
          <input
            placeholder="Isi disini..."
            type="text"
            id="eventLink"
            name="eventLink"
            value={formValues.eventLink}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div> */}
        <div className="flex justify-end space-x-4 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-white bg-red-500 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-emerald-500 rounded-md"
            disabled={isLoading}
          >
            {isLoading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </form>
    </Modals>
  );
};

export default AccountFormModal;
