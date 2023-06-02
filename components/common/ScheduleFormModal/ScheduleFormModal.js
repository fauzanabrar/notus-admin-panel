import { useState } from 'react';
import { Modals } from '../Modals';
import { DEFAULT_SCHEDULE_DATA } from 'utils/constants';

const ScheduleFormModal = ({ isOpen, onClose, data = {} }) => {
  const [formValues, setFormValues] = useState({ ...data, ...DEFAULT_SCHEDULE_DATA });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormValues((prevValues) => ({
      ...prevValues,
      eventFile: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formIsValid()) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setFormValues({
        eventName: '',
        eventLocation: '',
        eventStartDate: '',
        eventEndDate: '',
        invitedBy: '',
        eventLink: '',
        eventDescription: '',
        eventFile: null,
      });

      setIsLoading(false);

      onClose();
    }, 2000);
  };

  const formIsValid = () => {
    const linkRegex = /^(http|https):\/\/[^ "]+$/;
    const isValidLink = linkRegex.test(formValues.eventLink);
    if (!isValidLink) {
      alert('Link is not valid');
      return false;
    }

    // Contoh validasi tanggal
    const startDate = new Date(formValues.eventStartDate);
    const endDate = new Date(formValues.eventEndDate);
    if (endDate < startDate) {
      alert('End date must be after start date');
      return false;
    }

    // Contoh validasi lainnya...
    
    return true;
  };

  return (
    <Modals isOpen={isOpen} size="medium" onClose={onClose} title="Schedule Form">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="eventName" className="block font-medium">
            Nama Kegiatan
          </label>
          <input
            placeholder="Isi disini..."
            type="text"
            id="eventName"
            name="eventName"
            value={formValues.eventName}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="eventLocation" className="block font-medium">
            Tempat Kegiatan
          </label>
          <input
            placeholder="Isi disini..."
            type="text"
            id="eventLocation"
            name="eventLocation"
            value={formValues.eventLocation}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="eventStartDate" className="block font-medium">
            Tanggal Kegiatan (Start)
          </label>
          <input
            placeholder="Isi disini..."
            type="datetime-local"
            id="eventStartDate"
            name="eventStartDate"
            value={formValues.eventStartDate}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="eventEndDate" className="block font-medium">
            Tanggal Kegiatan (End)
          </label>
          <input
            placeholder="Isi disini..."
            type="datetime-local"
            id="eventEndDate"
            name="eventEndDate"
            value={formValues.eventEndDate}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="invitedBy" className="block font-medium">
            Yang Mengundang
          </label>
          <input
            placeholder="Isi disini..."
            type="text"
            id="invitedBy"
            name="invitedBy"
            value={formValues.invitedBy}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
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
        </div>
        <div>
          <label htmlFor="eventDescription" className="block font-medium">
            Keterangan
          </label>
          <textarea
            placeholder="Isi disini..."
            id="eventDescription"
            name="eventDescription"
            value={formValues.eventDescription}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="eventFile" className="block font-medium">
            Tambahkan file
          </label>
          <input
            type="file"
            id="eventFile"
            name="eventFile"
            onChange={handleFileChange}
            className="border-gray-300"
          />
        </div>
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

export default ScheduleFormModal;
