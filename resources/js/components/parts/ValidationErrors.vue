<template>
    <div>
        <div v-if="validationErrors" class="alert alert-danger">
            <ul>
                <li v-for="(value, index) in validationErrors"
                    :key="index">{{ value }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        errors: Object
    },
    computed: {
        validationErrors() {
            // преобразовать в массив и развернуть вложенность
            let errors = Object.values(this.errors);
            errors = errors.flat();

            return errors;
        }
    }
}
</script>