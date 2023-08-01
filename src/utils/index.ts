import moment from 'moment';

export const truncate = (string: string | undefined, n: number) => {
    return string?.trim().substring(0, n) + `${n > 10 ? '...' : '' }`
}

export const stringSplit = (string: string) => {
    return string.split(" ").join("-");
} 


export const formatDate = (dateString: string) => {
  return moment(dateString).fromNow();
};


export const development = "http://localhost:3000";

export const production = "https://bitbama.io";

