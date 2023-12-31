export function toFormData({ form, submitter }) {
    return new FormData(form, submitter);
}