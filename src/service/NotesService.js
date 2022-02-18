import AxiosService from "./AxiosService";

let baseURL = 'http://localhost:7000/api/v1/notes';

const axiosService = new AxiosService();

const header = {
  headers: {
    token: localStorage.getItem("token")
  }
}

class NoteService {
  addNote(data){
    return axiosService.post(`${baseURL}`,data,header);
  }

  getAllNotes(){
    return axiosService.get(`${baseURL}`,header);
  }

  getArchive(data){
    return axiosService.get(`${baseURL}/archievedNotes`,header)
  }

  getTrash(data){
    return axiosService.get(`${baseURL}/trashedNotes`,header)
  }

  updateNote(data){
    return axiosService.put(`${baseURL}`,data, header)
  }

  deleteNote(data){
    return axiosService.delete(`${baseURL}/:_id`,data, header)
  }

}

export default NoteService;